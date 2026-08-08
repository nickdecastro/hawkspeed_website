import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Endings Guide for Elden Ring",
};

const EFFECTIVE_DATE = "August 8, 2026";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-foreground/60">
        Endings Guide for Elden Ring &middot; Effective {EFFECTIVE_DATE}
      </p>

      <div className="mt-8 flex flex-col gap-6 text-foreground/80">
        <p>
          This Privacy Policy explains how HawkSpeed (&quot;we&quot;, &quot;us&quot;) handles
          information in connection with the Android app{" "}
          <strong>Endings Guide for Elden Ring</strong> (the &quot;App&quot;).
        </p>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            No Data Collection
          </h2>
          <p className="mt-2">
            The App does not collect, store, or transmit any personal data.
            It does not use analytics, crash reporting, or advertising
            services, and it does not include any third-party tracking
            SDKs. The App does not require you to create an account, and it
            has no in-app purchases.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">Permissions</h2>
          <p className="mt-2">
            The App does not request any device permissions beyond what is
            required for basic operation on Android.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            Children&apos;s Privacy
          </h2>
          <p className="mt-2">
            The App is not directed at children under the age of 13 and does
            not knowingly collect information from children.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            Third-Party Links
          </h2>
          <p className="mt-2">
            Guide content within the App may link out to official or
            third-party sources (such as game wikis). We are not responsible
            for the privacy practices of any external sites you visit
            through those links.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            Changes to This Policy
          </h2>
          <p className="mt-2">
            If our data practices change in a future update, this page will
            be updated to reflect those changes, along with a new effective
            date above.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">Contact Us</h2>
          <p className="mt-2">
            Questions about this policy can be sent to{" "}
            <a href="mailto:info@hawkspeed.com" className="underline underline-offset-4">
              info@hawkspeed.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
