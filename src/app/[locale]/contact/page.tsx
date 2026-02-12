import ContactInfo from '@/components/contact/contact-info';
import PageTitle from '@/components/layout/page-title';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export const revalidate = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.contact' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return (
    <div>
      <div className="container max-w-5xl mx-auto">
        <PageTitle title={t('title')} subtitle={t('subtitle')} withBreadCrumb />

        {/* Content Grid */}
        <div className='grid grid-cols-2 gap-8 mt-6 items-center justify-center'>
          <div className="col-span-1 w-full rounded-xl min-h-72 h-full overflow-hidden border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.232568111968!2d34.82410947644325!3d38.64353246164256!2m3!1f0!2f0!3f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a6879a9478f99%3A0x73471fbf797607b4!2zQXlkxLFubMSxIE9ydGEgTWFoLCBLYXLFn8SxIEJ1Y2FrIENkLiAzMC9CLCA1MDE4MCBHw7ZyZW1lL05ldsWfZWhpciBNZXJrZXovTmV2xZ9laGly!5e0!3m2!1str!2str!4v1770910034296!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <ContactInfo />
        </div>

        {/* FAQ or Additional Info (Optional) */}
        <div className="my-16">
          <div className="bg-muted/40 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              {locale === 'tr' ? 'Hızlı İletişim' : 'Quick Contact'}
            </h2>
            <p className="text-muted-foreground mb-6">
              {locale === 'tr'
                ? 'WhatsApp üzerinden de bize ulaşabilirsiniz'
                : 'You can also reach us via WhatsApp'}
            </p>
            <Link
              href="https://wa.me/905330138025"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
}
