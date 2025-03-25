import { ServantDetails } from "../../models/servantDetails"
import { Html } from "@elysiajs/html"

function AscensionPicker({ servant }: { servant: ServantDetails }): JSX.Element {
    return (
        <div class="grid grid-rows-1">
            <div class="grid grid-cols-2">
                <div class="col-span-1 mr-2">
                    <label class="form-control max-w-xs">
                        <div class="label">
                            <span class="label-text">Start</span>
                        </div>
                        <select class="select select-bordered" hx-get={`/servant/${servant.id}/materials`} hx-target="#materials" hx-include="[param]" name="ascensionStart" param >
                            <option value="0" selected>1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                            <option value="3">4</option>
                        </select>
                    </label>
                </div>
                <div class="col-span-1 ml-2">
                    <label class="form-control max-w-xs">
                        <div class="label">
                            <span class="label-text">End</span>
                        </div>
                        <select class="select select-bordered" hx-get={`/servant/${servant.id}/materials`} hx-target="#materials" hx-include="[param]" name="ascensionEnd" param>
                            <option value="0" selected>1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                            <option value="3">4</option>
                        </select>
                    </label>
                </div>
            </div>
        </div>
    )
}

export { AscensionPicker }
