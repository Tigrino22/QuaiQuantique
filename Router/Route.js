export class Route{
    constructor(url, title, pathHtml, pathJs = "", authorize){
        this.url = url;
        this.title = title;
        this.pathHtml = pathHtml;
        this.pathJs = pathJs;
        this.authorize = authorize
    }
}

/**
 *      this.url = url;             : String
 *      this.title = title;         : String
 *      this.pathHtml = pathHtml;   : String
 *      this.pathJs = pathJs;       : String
 *      this.authorize = authorize  : Array['disconnected', 'connected', 'admin', 'client']
 */