"use cient";

import { useState } from "react";

import { IrregularVerbs } from "../myData";

const style = {
  input__Container: "w-full min-h-[90vh]",
  form: "shadow-md rounded px-8 pt-6 pb-8 mb-4",
  input:
    'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"',
  table: "min-w-full text-center",
  thead: "border-b bg-gray-800 text-white",
  tr: "border-b-2 border-blue-200",
  th: "text-sm font-medium p-2 sm:p-4",
};

function SearchIrregular() {
  const [search, setSearch] = useState("");

  return <div className={style.input__Container}>
        <form className={style.form}>
          <div>
            <input
              className={style.input}
              id="username"
              type="text"
              placeholder="Hledej slovo"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>

        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className={style.table}>
                  <thead className={style.thead}>
                    <tr>
                      <th scope="col" className={style.th}>
                        #
                      </th>
                      <th scope="col" className={style.th}>
                        CZ
                      </th>
                      <th scope="col" className={style.th}>
                        ENG
                      </th>
                      <th scope="col" className={style.th}>
                        Past Simple
                      </th>
                      <th scope="col" className={style.th}>
                        Past Perfect
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-green">
                    {
                      // Find all matching words with the same value which has been written into the input
                      IrregularVerbs.filter((item) => {
                        return search.toLowerCase() === ""
                          ? item
                          : item.cz.toLowerCase().startsWith(search) ||
                              item.base.toLowerCase().startsWith(search) ||
                              item.pastSimple
                                .toLowerCase()
                                .startsWith(search) ||
                              item.pastParticiple
                                .toLowerCase()
                                .startsWith(search);
                      }).map((item, index) => (
                        <tr key={index} className={style.tr}>
                          <th scope="col" className={style.th}>
                            {index + 1}
                          </th>
                          <th scope="col" className={style.th}>
                            {item.cz}
                          </th>
                          <th scope="col" className={style.th}>
                            {item.base}
                          </th>
                          <th scope="col" className={style.th}>
                            {item.pastSimple}
                          </th>
                          <th scope="col" className={style.th}>
                            {item.pastParticiple}
                          </th>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
};

export default SearchIrregular;
