import {useRouter} from "next/router";
import {Button} from "ui";

export default function Web() {
  const router = useRouter();

  return (
    <div>
      <h1>Web</h1>
      <Button onClick={() => router.push("http://localhost:3001")} />
    </div>
  );
}
