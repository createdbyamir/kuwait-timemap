import timeline from "../data/timeline.json";

function TimelineList() {
  return (
    <div>
      {timeline.map(({ id, title, year, summary, placeIds, image }) => {
        return (
          <div key={id}>
            <h2>{title}</h2>
            <p>{year}</p>
            <p>{summary}</p>
            <img
                src={image}
            >
            </img>
          </div>
        );
      })}
    </div>
  );
}

export default TimelineList;
