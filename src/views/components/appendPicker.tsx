import { Html } from "@elysiajs/html"
import { ServantDetails } from "../../models/servantDetails"

function AppendPicker({ servant }: { servant: ServantDetails }): JSX.Element {
    return (
        <div class="grid grid-rows-3">
            {servant.appends.map((append, ndx) => {
                if (ndx < 5) {
                    return (
                        <div class="grid grid-rows-1 grid-cols-2 row-span-1 my-1">
                            <div class="col-span-2 row-span-1 inline-flex">
                                <img class="w-7 h-7" src={append.icon} />
                                <span class="px-4">{append.name}</span>
                            </div>
                            <div class="col-span-1 row-span-1 mr-2">
                                <label class="form-control max-w-xs">
                                    <div class="label">
                                        <span class="label-text">Start</span>
                                    </div>
                                    <select class="select select-bordered" hx-get={`/servant/${servant.id}/materials`} hx-target="#materials" hx-include="[param]" name={`append${ndx + 1}Start`} param>
                                        <option value="1" selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </label>
                            </div>
                            <div class="col-span-1 row-span-1 ml-2">
                                <label class="form-control max-w-xs">
                                    <div class="label">
                                        <span class="label-text">End</span>
                                    </div>
                                    <select class="select select-bordered" hx-get={`/servant/${servant.id}/materials`} hx-target="#materials" hx-include="[param]" name={`append${ndx + 1}End`} param>
                                        <option value="1" selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </label>
                            </div>
                        </div>            
                    )
                }
            })}
        </div>
    )
}

export { AppendPicker }
