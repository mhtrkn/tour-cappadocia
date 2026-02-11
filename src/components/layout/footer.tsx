import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('common');

  return (
    <footer className='w-full relative bg-accent-foreground/75 text-white border-t'>
      <Image src={"/images/bottom-splash.jpg"} alt="Cappadocia" fill className="object-center object-cover brightness-50" />

      <div className="absolute inset-0 bg-linear-to-t from-accent-foreground to-accent-foreground/20" />

      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <Image src={"/icons/logo.png"} alt="Paphlagonia Tour Logo" width={120} height={120} className="drop-shadow-lg object-contain" />
              </div>
              <p className="text-sm text-muted">
                {t('footer.description')}
              </p>
            </div>

            <div className='text-center'>
              <h3 className="font-semibold mb-4">{t('footer.quickLinks')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tours" className="text-sm text-muted hover:text-primary transition">
                    {t('tours')}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-muted hover:text-primary transition">
                    {t('about')}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted hover:text-primary transition">
                    {t('contact')}
                  </Link>
                </li>
              </ul>
            </div>

            <div className='text-right'>
              <h3 className="font-semibold mb-4">{t('footer.popularTours')}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted hover:text-primary transition">
                    {t('footer.redTour')}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted hover:text-primary transition">
                    {t('footer.greenTour')}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted hover:text-primary transition">
                    {t('footer.privateTour')}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-gray-200/50">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted">
                &copy; {new Date().getFullYear()} Paphlagonia Tour. {t('footer.allRightsReserved')}
              </p>
              <div className="flex space-x-12">
                <Link href="/privacy-and-policy" className="text-sm text-muted hover:text-primary transition">
                  {t('footer.privacyPolicy')}
                </Link>
                <Link href="/kvkk" className="text-sm text-muted hover:text-primary transition">
                  {t('footer.termsOfService')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
