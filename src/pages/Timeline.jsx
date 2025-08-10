import TimelineList from "../components/TimelineList"


function Timeline() {
    return (
        <div>
            <div className="pageheader">
                <h1>Timeline</h1>
                <p>Timeline of events</p>
            </div>
            <div className="sorting">
                <div className="search"></div>
                <div className="sort"></div>
                <div className="place"></div>
            </div>
            <div>
                <TimelineList />
            </div>
        </div>
    )
}

export default Timeline