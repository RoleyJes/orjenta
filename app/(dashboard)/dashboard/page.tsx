import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/logout-button";
import { connection } from "next/server";

export const instant = false;

export default async function DashboardPage() {
  await connection();

  const supabase = await createClient();

  // const { data, error } = await supabase.auth.getClaims();

  // if (error || !data?.claims) {
  //   redirect("/login");
  // }

  const {
    data: { user: userData },
  } = await supabase.auth.getUser();

  const firstName = userData?.user_metadata.full_name.split(" ")[0] || "USER";

  return (
    <main className="min-h-screen p-6 sm:p-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <header>
          <p className="text-sm font-medium text-gray-500">ORJENTA</p>
          <h1 className="mt-2 text-3xl font-bold">Dashboard</h1>
          <p className="mt-2 text-gray-600 capitalize">
            Welcome back, {firstName}.
          </p>
          <LogoutButton />
        </header>

        <section className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Your workspace</h2>
          <p className="mt-2 text-gray-600">
            Your client-management workspace will take shape here.
          </p>
        </section>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quo
        ipsum totam dolores, laborum esse animi nesciunt est dolore itaque
        corrupti omnis quis accusantium aliquam ratione minima earum suscipit
        ad! Illo labore delectus nemo dolorem. Veritatis quia maxime id deserunt
        numquam ratione similique repellat et exercitationem. Accusamus,
        suscipit perspiciatis, odit, dignissimos asperiores animi recusandae
        inventore placeat ex iste optio atque? Ipsum reprehenderit tenetur a
        eius mollitia necessitatibus cum at repudiandae tempore? Quae quas,
        dolorem voluptate dolor quam nostrum praesentium corporis ex dolorum
        deleniti eveniet minus fuga eos, temporibus facere modi. Veniam, sequi
        culpa tempore hic accusantium quasi recusandae nulla tenetur
        necessitatibus voluptate temporibus laudantium repellat laborum error
        voluptas exercitationem veritatis! Ut cumque eveniet accusamus veniam
        expedita natus iste esse nam? Sunt dolorum provident a ut laudantium
        obcaecati ex nobis consectetur inventore qui eius mollitia iure
        repudiandae, neque saepe. Molestiae eius ipsum, minima quo officiis
        iusto dolore quasi optio quae illo? Blanditiis voluptatibus dolore
        facere adipisci? Nisi, vitae beatae! Est ullam provident repellat nulla
        dolores inventore fugiat numquam, eum a laborum nihil delectus ut
        possimus laboriosam labore laudantium minus quisquam cupiditate! Fugit
        repellendus a consequatur? Assumenda voluptatem hic, tempora totam
        perferendis qui saepe dolor repellendus a, ipsa deleniti. Alias nulla
        soluta ipsum sequi quaerat obcaecati, nihil dicta, fuga eveniet totam
        molestias? Sequi sed quia ullam sapiente quae beatae minima, eligendi
        quis nemo nisi illum blanditiis voluptas quam exercitationem odit sunt.
        Dicta vitae sunt explicabo atque quasi molestias neque at nulla
        voluptate. Reiciendis dicta asperiores quibusdam debitis rem inventore
        obcaecati et odio suscipit nemo voluptatem magni, explicabo tempora
        illum? Temporibus magnam reprehenderit fugit dolorem natus accusamus,
        repudiandae nobis! Repellat tenetur cumque in. Totam ab accusamus eos.
        Consequatur quam sed fuga iste? Eaque praesentium quis ipsa ad dolore
        veniam dicta. Labore nihil iure et soluta delectus, sed deleniti amet
        excepturi quibusdam repudiandae consequatur?
      </p>
    </main>
  );
}
