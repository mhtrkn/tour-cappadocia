/* eslint-disable react-hooks/set-state-in-effect */
// components/admin/admin-dashboard.tsx
'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { clearAdminSession, isAdminAuthenticated } from '@/lib/auth/admin-auth';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import {
  Calendar,
  DollarSign,
  Download,
  Eye,
  Hotel,
  LogOut,
  Mail,
  MapPin,
  Phone,
  RefreshCcw,
  Search,
  Trash2,
  Users
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface Booking {
  tourTitle: string;
  date: string;
  adults: number;
  totalPrice: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  hotelName?: string;
  pickupLocation?: string;
  specialRequests?: string;
  bookingReference: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Filter bookings based on search
    if (searchQuery.trim() === '') {
      setFilteredBookings(bookings);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = bookings.filter(
        (booking) =>
          booking.bookingReference.toLowerCase().includes(query) ||
          booking.firstName.toLowerCase().includes(query) ||
          booking.lastName.toLowerCase().includes(query) ||
          booking.email.toLowerCase().includes(query) ||
          booking.phone.includes(query) ||
          booking.tourTitle.toLowerCase().includes(query)
      );
      setFilteredBookings(filtered);
    }
  }, [searchQuery, bookings]);

  const loadBookings = () => {
    // Get all bookings from localStorage
    const allBookings: Booking[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith('booking_')) {
        try {
          const booking = JSON.parse(localStorage.getItem(key) || '');
          allBookings.push(booking);
        } catch (error) {
          console.error('Invalid booking data:', error);
        }
      }
    }

    // Sort by creation date (newest first)
    allBookings.sort((a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    setBookings(allBookings);
    setFilteredBookings(allBookings);
  };

  const handleLogout = () => {
    clearAdminSession();
    toast.success('Çıkış yapıldı');
    router.push('/admin');
  };

  const handleDeleteBooking = (bookingRef: string) => {
    if (window.confirm('Bu rezervasyonu silmek istediğinize emin misiniz?')) {
      localStorage.removeItem(`booking_${bookingRef}`);
      loadBookings();
      setSelectedBooking(null);
      toast.success('Rezervasyon silindi');
    }
  };

  const handleExportCSV = () => {
    if (bookings.length === 0) {
      toast.error('Dışa aktarılacak rezervasyon yok');
      return;
    }

    const headers = [
      'Rezervasyon Kodu',
      'Tarih',
      'Tur',
      'Kişi',
      'Tutar',
      'Ad',
      'Soyad',
      'E-posta',
      'Telefon',
      'Ülke',
      'Otel',
      'Alınma Noktası',
      'Özel İstekler',
      'Oluşturulma',
    ];

    const rows = bookings.map((b) => [
      b.bookingReference,
      format(new Date(b.date), 'dd/MM/yyyy'),
      b.tourTitle,
      b.adults,
      b.totalPrice,
      b.firstName,
      b.lastName,
      b.email,
      b.phone,
      b.country,
      b.hotelName || '-',
      b.pickupLocation || '-',
      b.specialRequests || '-',
      format(new Date(b.createdAt), 'dd/MM/yyyy HH:mm'),
    ]);

    const csv = [headers, ...rows].map((row) => row.join(',')).join('\n');
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `rezervasyonlar_${format(new Date(), 'dd-MM-yyyy')}.csv`;
    link.click();

    toast.success('CSV dosyası indirildi');
  };

  // Stats
  const totalBookings = bookings.length;
  const totalRevenue = bookings.reduce((sum, b) => sum + b.totalPrice, 0);
  const totalGuests = bookings.reduce((sum, b) => sum + b.adults, 0);

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      router.push('/admin');
      return;
    }

    loadBookings();
  }, [router]);

  return (
    <div className="min-h-screen bg-linear-to-b from-background to-muted/20 py-8">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Rezervasyon yönetim paneli</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={loadBookings}>
              <RefreshCcw className="w-4 h-4 mr-2" />
              Yenile
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Çıkış
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Toplam Rezervasyon
              </CardTitle>
              <Calendar className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalBookings}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Tüm rezervasyonlar
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Toplam Gelir
              </CardTitle>
              <DollarSign className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">€{totalRevenue}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Tüm rezervasyonlardan
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Toplam Misafir
              </CardTitle>
              <Users className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalGuests}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Kişi sayısı
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Search & Export */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Rezervasyon kodu, ad, e-posta ile ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button onClick={handleExportCSV} variant="outline">
            <Download className="w-4 h-4 mr-2" />
            CSV İndir
          </Button>
        </div>

        {/* Bookings Table */}
        <Card>
          <CardHeader>
            <CardTitle>
              Rezervasyonlar ({filteredBookings.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {filteredBookings.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">
                  {searchQuery ? 'Sonuç bulunamadı' : 'Henüz rezervasyon yok'}
                </h3>
                <p className="text-muted-foreground">
                  {searchQuery
                    ? 'Arama kriterlerinize uygun rezervasyon bulunamadı'
                    : 'Yeni rezervasyonlar burada görünecek'}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredBookings.map((booking) => (
                  <div
                    key={booking.bookingReference}
                    className="p-4 border rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      {/* Booking Info */}
                      <div className="flex-1 space-y-3">
                        {/* Header */}
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant="outline" className="font-mono">
                                {booking.bookingReference}
                              </Badge>
                              <span className="text-xs text-muted-foreground">
                                {format(new Date(booking.createdAt), 'dd MMM yyyy, HH:mm', { locale: tr })}
                              </span>
                            </div>
                            <h3 className="font-semibold text-lg">
                              {booking.tourTitle}
                            </h3>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">
                              €{booking.totalPrice}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {booking.adults} kişi
                            </div>
                          </div>
                        </div>

                        {/* Details Grid */}
                        <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span>{format(new Date(booking.date), 'dd MMMM yyyy', { locale: tr })}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-muted-foreground" />
                            <span>{booking.firstName} {booking.lastName}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-muted-foreground" />
                            <span className="truncate">{booking.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-muted-foreground" />
                            <span>{booking.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            <span>{booking.country}</span>
                          </div>
                          {booking.hotelName && (
                            <div className="flex items-center gap-2">
                              <Hotel className="w-4 h-4 text-muted-foreground" />
                              <span className="truncate">{booking.hotelName}</span>
                            </div>
                          )}
                        </div>

                        {/* Special Requests */}
                        {booking.specialRequests && (
                          <div className="p-3 bg-muted/50 rounded-lg">
                            <p className="text-xs font-medium mb-1">Özel İstekler:</p>
                            <p className="text-sm text-muted-foreground">
                              {booking.specialRequests}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelectedBooking(booking)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteBooking(booking.bookingReference)}
                        >
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Booking Detail Modal */}
        {selectedBooking && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedBooking(null)}
          >
            <Card
              className="w-full max-w-2xl max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Rezervasyon Detayları</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedBooking(null)}
                  >
                    ✕
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Full booking details here */}
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Rezervasyon Kodu</p>
                    <p className="font-mono font-bold text-lg">{selectedBooking.bookingReference}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Tur</p>
                      <p className="font-semibold">{selectedBooking.tourTitle}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Tarih</p>
                      <p className="font-semibold">
                        {format(new Date(selectedBooking.date), 'dd MMMM yyyy', { locale: tr })}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Kişi Sayısı</p>
                      <p className="font-semibold">{selectedBooking.adults} kişi</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Toplam Tutar</p>
                      <p className="font-semibold text-primary text-xl">€{selectedBooking.totalPrice}</p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-3">Müşteri Bilgileri</h4>
                    <div className="grid gap-3">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Ad Soyad</p>
                        <p className="font-medium">{selectedBooking.firstName} {selectedBooking.lastName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">E-posta</p>
                        <p className="font-medium">{selectedBooking.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Telefon</p>
                        <p className="font-medium">{selectedBooking.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Ülke</p>
                        <p className="font-medium">{selectedBooking.country}</p>
                      </div>
                      {selectedBooking.hotelName && (
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Otel</p>
                          <p className="font-medium">{selectedBooking.hotelName}</p>
                        </div>
                      )}
                      {selectedBooking.pickupLocation && (
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Alınma Noktası</p>
                          <p className="font-medium">{selectedBooking.pickupLocation}</p>
                        </div>
                      )}
                      {selectedBooking.specialRequests && (
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Özel İstekler</p>
                          <p className="font-medium">{selectedBooking.specialRequests}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-sm text-muted-foreground">
                      Oluşturulma: {format(new Date(selectedBooking.createdAt), 'dd MMMM yyyy, HH:mm', { locale: tr })}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
