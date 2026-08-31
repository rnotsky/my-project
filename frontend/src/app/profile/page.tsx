import ProfileHero from "@/components/profile/ProfileHero";
import QuickStats from "@/components/profile/QuickStats";
import ProfileTabs from "@/components/profile/ProfileTabs";

export default function ProfilePage() {
  return (
    <main
      className="
      min-h-screen
      bg-black
      text-white
      px-4
      py-28
      sm:px-6
      lg:px-10
      "
    >

      <div
        className="
        mx-auto
        max-w-6xl
        space-y-8
        "
      >

        <ProfileHero />

        <QuickStats />

        <ProfileTabs />

      </div>

    </main>
  );
}