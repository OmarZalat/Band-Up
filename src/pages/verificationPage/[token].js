import { useEffect } from "react";
import { useRouter } from "next/router";
function VerificationPage() {
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/verifyEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: token }),
      });
    })();
  }, [token]);
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Verified ✅ </h1>
      </div>
    </>
  );
}

export default VerificationPage;
