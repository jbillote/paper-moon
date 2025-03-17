import { Html } from "@elysiajs/html"

function AscensionPicker({ servantId }: { servantId: number }): JSX.Element {
    return (
        <div class="grid grid-rows-1">
            <div class="grid grid-cols-2">
                <div class="col-span-1 mr-2">
                    <label class="form-control max-w-xs">
                        <div class="label">
                            <span class="label-text">Start</span>
                        </div>
                        <select class="select select-bordered">
                            <option selected>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </label>
                </div>
                <div class="col-span-1 ml-2">
                    <label class="form-control max-w-xs">
                        <div class="label">
                            <span class="label-text">End</span>
                        </div>
                        <select class="select select-bordered">
                            <option selected>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </label>
                </div>
            </div>
        </div>
    )
}

export { AscensionPicker }
