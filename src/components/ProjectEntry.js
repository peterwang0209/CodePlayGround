import "./ProjectEntry.css";

function ProjectEntry(props) {
  const { title, description, techstacks } = props;

  return (
    <div className="w-1/2 mx-auto bg-white opacity-80 rounded-lg m-2 shadow-2xl">
      <div className="grid grid-rows-3 grid-flow-col gap-4 h-48">
        <div className="flex h-48">
          <div class="w-1/4 flex justify-center items-center">
            <div className="row-span-3 m-1">
              <h2 className="block">{title}</h2>
            </div>
          </div>
          <div class="w-3/4">
            <div className="col-span-2 m-2">
              <p>{techstacks}</p>
            </div>
            <div className="row-span-2 col-span-2 overflow-auto max-h-32 m-2">
              <h2 className="block">{description}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectEntry;
