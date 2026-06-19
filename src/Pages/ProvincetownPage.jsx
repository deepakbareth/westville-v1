import ProvinceTown from "../Component/Provincetown/ProvinceTown"
import WalkingAround from "../Component/Provincetown/WalkingAround"
import WestvilleCottage from "../Component/ReusableComp/WestvilleCottage"

function ProvincetownPage() {
    return (
        <div>
            <WestvilleCottage />
            <ProvinceTown />
            <WalkingAround />
        </div>
    )
}

export default ProvincetownPage