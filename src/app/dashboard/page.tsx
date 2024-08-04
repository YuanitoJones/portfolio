// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL

import { Button, Link } from "@nextui-org/react";

export default function Page() {
  return (
    <section>
      Hello, Dashboard Page!
      <Button href="/dashboard/settings" as={Link} color="primary" variant="solid">
        Settings
      </Button>
    </section>
  );
}
