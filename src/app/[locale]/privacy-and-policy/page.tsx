import PageTitle from "@/components/layout/page-title";
import { useTranslations } from "next-intl";

function PrivacyAndPolicy() {
  const t = useTranslations("about");

  return (
    <div className="container max-w-5xl mx-auto">
      <PageTitle
        withBreadCrumb
        title={t("privacyPolicy.title")}
        subtitle={t("privacyPolicy.subtitle")}
      />

      {/* Membership Section */}
      <section className="my-10">
        <h2 className="text-2xl font-semibold mb-4">
          {t("privacyPolicy.membershipTitle")}
        </h2>

        <ul className="space-y-3 list-disc list-inside text-gray-700">
          <li>{t("privacyPolicy.membershipText1")}</li>
          <li>{t("privacyPolicy.membershipText2")}</li>
          <li>{t("privacyPolicy.membershipText3")}</li>
          <li>{t("privacyPolicy.membershipText4")}</li>
          <li>{t("privacyPolicy.membershipText5")}</li>
        </ul>
      </section>

      {/* Credit Card Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          {t("privacyPolicy.creditCardTitle")}
        </h2>

        <ul className="space-y-3 list-disc list-inside text-gray-700">
          <li>{t("privacyPolicy.creditCardText1")}</li>
          <li>{t("privacyPolicy.creditCardText2")}</li>
          <li>{t("privacyPolicy.creditCardText3")}</li>
          <li>{t("privacyPolicy.creditCardText4")}</li>
          <li>{t("privacyPolicy.creditCardText5")}</li>
        </ul>
      </section>

      {/* Important Note */}
      <section className="mb-10 bg-blue-50 p-5 rounded-xl border border-blue-200">
        <h2 className="text-xl font-semibold mb-3">
          {t("privacyPolicy.noteTitle")}
        </h2>

        <p className="text-gray-700">
          {t("privacyPolicy.noteText")}
        </p>
      </section>

      {/* Email Security */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          {t("privacyPolicy.emailTitle")}
        </h2>

        <ul className="space-y-3 list-disc list-inside text-gray-700">
          <li>{t("privacyPolicy.emailText1")}</li>
          <li>{t("privacyPolicy.emailText2")}</li>
          <li>{t("privacyPolicy.emailText3")}</li>
        </ul>
      </section>
    </div>
  );
}

export default PrivacyAndPolicy;
