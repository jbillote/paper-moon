import { Html } from "@elysiajs/html"
import { ServantDetails } from "../../models/servantDetails"

function SkillPicker({ servant }: { servant: ServantDetails }): JSX.Element {
    return (
        <div class="grid grid-rows-3">

            <div class="grid grid-rows-1 grid-cols-2 row-span-1 my-1">
                <div class="col-span-2 row-span-1 inline-flex">
                    <img class="w-7 h-7" src={servant.skills[0].icon} />
                    <span class="px-4">{servant.skills[0].name}</span>
                </div>
                <div class="col-span-1 row-span-1 mr-2">
                    <label class="form-control max-w-xs">
                        <div class="label">
                            <span class="label-text">Start</span>
                        </div>
                        <select class="select select-bordered">
                            <option selected>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                    </label>
                </div>
                <div class="col-span-1 row-span-1 ml-2">
                    <label class="form-control max-w-xs">
                        <div class="label">
                            <span class="label-text">End</span>
                        </div>
                        <select class="select select-bordered">
                            <option selected>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                    </label>
                </div>
            </div>

            <div class="grid grid-rows-1 grid-cols-2 row-span-1 my-1">
                <div class="col-span-2 row-span-1 inline-flex">
                    <img class="w-7 h-7" src={servant.skills[1].icon} />
                    <span class="px-4">{servant.skills[1].name}</span>
                </div>
                <div class="col-span-1 row-span-1 mr-2">
                    <label class="form-control max-w-xs">
                        <div class="label">
                            <span class="label-text">Start</span>
                        </div>
                        <select class="select select-bordered">
                            <option selected>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                    </label>
                </div>
                <div class="col-span-1 row-span-1 ml-2">
                    <label class="form-control max-w-xs">
                        <div class="label">
                            <span class="label-text">End</span>
                        </div>
                        <select class="select select-bordered">
                            <option selected>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                    </label>
                </div>
            </div>

            <div class="grid grid-rows-1 grid-cols-2 row-span-1 my-1">
                <div class="col-span-2 row-span-1 inline-flex">
                    <img class="w-7 h-7" src={servant.skills[2].icon} />
                    <span class="px-4">{servant.skills[2].name}</span>
                </div>
                <div class="col-span-1 row-span-1 mr-2">
                    <label class="form-control max-w-xs">
                        <div class="label">
                            <span class="label-text">Start</span>
                        </div>
                        <select class="select select-bordered">
                            <option selected>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                    </label>
                </div>
                <div class="col-span-1 row-span-1 ml-2">
                    <label class="form-control max-w-xs">
                        <div class="label">
                            <span class="label-text">End</span>
                        </div>
                        <select class="select select-bordered">
                            <option selected>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                    </label>
                </div>
            </div>
        </div>
    )
}

export { SkillPicker }
