export class News {
    public id: number;
    public title: string;
    public showOnHomepage: boolean;
    public urlToImage: string;
    public published: string;
    public content: string;
    constructor(id: number, title: string, showOnHomepage: boolean, urlToImage: string, published: string, content: string) {
        this.id = id;
        this.title = title;
        this.showOnHomepage = showOnHomepage;
        this.urlToImage = urlToImage;
        this.published = published;
        this.content = content;
    }
}
