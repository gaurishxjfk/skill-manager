import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession as justSession, useSupabaseClient as justSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "../components/Account";

const account = () => {
  const session = justSession();
  const supabase = justSupabaseClient();
  return (
    <>
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="default"
        />
      ) : (
        <Account session={session} />
      )}
    </>
  );
};
export default account;
