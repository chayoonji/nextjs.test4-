import { useRouter } from "next/router";

export default function User() {
  const router = useRouter();
  // console.log(router);
  const { username } = router.query;
  return (
    <div>
      <h1> userdetailpage- {username} </h1>
    </div>
  );
}
