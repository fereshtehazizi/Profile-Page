import Row from "./row";

export default function PersonalInfoCard({Info}) {
    return(
        <div className="card infoCard">
            <h2 className="cardTitle">Personal Information</h2>

            <div className="row">
                {
                    Object.keys(Info).map(label =>(
                        <Row key={label} label={label} value={Info[label]}></Row>
                    ))
                }
            </div>
        </div>
    )
}