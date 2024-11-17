import { BaseResourceClass } from "../base-resource-type/base-resource-type";
import { resourceTypesEnum } from "../resource-types-enum";

export class FetchResource extends BaseResourceClass{
    url;

    constructor(url){
        super();
        this.type = resourceTypesEnum.fetch;
        this.url = url;
    }
}