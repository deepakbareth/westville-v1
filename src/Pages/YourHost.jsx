import PageBanner from "../Component/ReusableComp/PageBanner";
import WestvilleCottage from "../Component/ReusableComp/WestvilleCottage";
import Host from "../Component/YourHost/Host";

function YourHost() {
    return (
        <div>
            <PageBanner title="Your Hosts" />
            <WestvilleCottage />
            <Host />
        </div>
    );
}

export default YourHost;