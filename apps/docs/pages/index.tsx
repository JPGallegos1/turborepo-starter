import {useRouter} from "next/router";
import {Button} from "ui";

export default function Docs() {
  const router = useRouter();

  return (
    <div>
      <h1>Docs</h1>
      <Button onClick={() => router.push("http://localhost:3000")} />
    </div>
  );
}
