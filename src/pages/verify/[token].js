import { useEffect, useState } from "react";
import { GoVerified } from "react-icons/go";
// import Footer from "../../src/components/UI/footer";
import Link from "next/link";
import { useRouter } from "next/router";

function Verify() {
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
    <div id="verify-main">
      <h1>Verification Successful</h1>
      <p id="verify-logo">
        <GoVerified />
      </p>
      <h2 id="login-redirect">
        <Link href="/passwordRecovery">Continue to password recovery page</Link>
      </h2>
      <div id="verify-footer">{/* <Footer></Footer> */}</div>
    </div>
  );
}
export default Verify;
