// app/actions/telegram.ts
'use server';

interface BookingNotification {
  tourTitle: string;
  date: string;
  adults: number;
  totalPrice: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  hotelName?: string;
  pickupLocation?: string;
  specialRequests?: string;
  bookingReference: string;
}

export async function sendTelegramNotification(booking: BookingNotification) {
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('❌ Telegram credentials missing in .env.local');
    return { success: false, error: 'Credentials missing' };
  }

  const message = `
🎊✨ *YENİ REZERVASYON GELDİ!* ✨🎊

🆔 *Rezervasyon Kodu:*
👉 ${booking.bookingReference}

🗺️🎫 *Tur Detayları*
━━━━━━━━━━━━━━
🏝️ Tur: ${booking.tourTitle}
📅 Tarih: ${booking.date}
👥 Kişi Sayısı: ${booking.adults}
💰 Tutar: ${booking.totalPrice}

🙋‍♂️🙋‍♀️ *Müşteri Bilgileri*
━━━━━━━━━━━━━━
👤 Ad Soyad: ${booking.firstName} ${booking.lastName}
📧 E-posta: ${booking.email}
📱 Telefon: ${booking.phone}
🌍 Ülke: ${booking.country}
${booking.hotelName ? `🏨 Otel: ${booking.hotelName}` : ''}
${booking.pickupLocation ? `🚐 Alınma Noktası: ${booking.pickupLocation}` : ''}

${booking.specialRequests ? `📝✨ *Özel İstekler*\n👉 ${booking.specialRequests}` : ''}

━━━━━━━━━━━━━━
⏰🕒 ${new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })}
  `.trim();

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    );

    const data = await response.json();

    if (!data.ok) {
      console.error('❌ Telegram API Error:', data);
      return { success: false, error: data.description };
    }

    console.log('✅ Telegram notification sent!');
    return { success: true, data };

  } catch (error) {
    console.error('❌ Failed to send Telegram notification:', error);
    return { success: false, error };
  }
}
