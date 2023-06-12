import Link from "next/link";

function MyBandNavigationBar({ setActiveTab, role }) {
  return (
    <>
      <div id="myband_navigation_bar">
        <ul>
          <li>
            <Link href="#" onClick={() => setActiveTab("featured")}>
              Featured
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => setActiveTab("members")}>
              Members
            </Link>
          </li>

          {role === "LEADER" && (
            <li>
              <Link href="#" onClick={() => setActiveTab("settings")}>
                Settings
              </Link>
            </li>
          )}
          <li>
            <Link href="#" onClick={() => setActiveTab("about")}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MyBandNavigationBar;
