/* eslint-disable @typescript-eslint/no-explicit-any */
import BreadcrumbWrapper from "./breadcrumb"

function PageTitle({ title, subtitle, withBreadCrumb = false, items }: { title: string, subtitle?: string, withBreadCrumb?: boolean, items?: any[] }) {
  return (
    <div className="container mx-auto max-w-5xl">
      {withBreadCrumb && (
        <BreadcrumbWrapper
          items={items || [{ label: title }]}
        />
      )}
      <section className="py-2 md:py-8">
        <div className="px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-0 md:mb-4">
            {title}
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </section>
    </div>
  )
}

export default PageTitle
