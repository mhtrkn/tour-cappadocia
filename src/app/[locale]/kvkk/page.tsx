import { useTranslations } from "next-intl";

function Kvkk() {
  const t = useTranslations("about");

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          {t("kvkk.title")}
        </h1>

        <p className="text-gray-600">
          {t("kvkk.subtitle")}
        </p>
      </div>

      {/* Section 1 */}
      <section className="mb-10">
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
