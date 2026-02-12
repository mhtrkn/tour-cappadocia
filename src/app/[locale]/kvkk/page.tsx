import PageTitle from "@/components/layout/page-title";
import { useTranslations } from "next-intl";

function Kvkk() {
  const t = useTranslations("about");

  return (
    <div className="container max-w-5xl mx-auto">
      <PageTitle
        withBreadCrumb
        title={t("kvkk.title")}
        subtitle={t("kvkk.subtitle")}
      />

      {/* Membership Section */}
      <section className="my-10">
        <h2 className="text-2xl font-semibold mb-4">
          {t("kvkk.section1Title")}
        </h2>

        <ul className="list-disc list-inside space-y-2">
          <li>{t("kvkk.section1Text1")}</li>
          <li>{t("kvkk.section1Text2")}</li>
          <li>{t("kvkk.section1Text3")}</li>
          <li>{t("kvkk.section1Text4")}</li>
        </ul>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          {t("kvkk.section2Title")}
        </h2>

        <ul className="list-disc list-inside space-y-2">
          <li>{t("kvkk.section2Text1")}</li>
          <li>{t("kvkk.section2Text2")}</li>
          <li>{t("kvkk.section2Text3")}</li>
          <li>{t("kvkk.section2Text4")}</li>
          <li>{t("kvkk.section2Text5")}</li>
          <li>{t("kvkk.section2Text6")}</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          {t("kvkk.section3Title")}
        </h2>

        <ul className="list-disc list-inside space-y-2">
          <li>{t("kvkk.section3Text1")}</li>
          <li>{t("kvkk.section3Text2")}</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          {t("kvkk.section4Title")}
        </h2>

        <ul className="list-disc list-inside space-y-2">
          <li>{t("kvkk.section4Text1")}</li>
          <li>{t("kvkk.section4Text2")}</li>
          <li>{t("kvkk.section4Text3")}</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          {t("kvkk.section5Title")}
        </h2>

        <ul className="list-disc list-inside space-y-2">
          <li>{t("kvkk.section5Text1")}</li>
          <li>{t("kvkk.section5Text2")}</li>
          <li>{t("kvkk.section5Text3")}</li>
          <li>{t("kvkk.section5Text4")}</li>
          <li>{t("kvkk.section5Text5")}</li>
        </ul>
      </section>

      {/* Footer Note */}
      <div className="bg-blue-50 p-5 mb-10 rounded-lg border border-blue-200 text-sm text-muted-foreground">
        {t("kvkk.lastNote")}
      </div>

    </div>
  );
}

export default Kvkk;
