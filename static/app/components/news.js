riot.tag2('news', '<div class="single-widget"> <h2>ΟΡΟΣΗΜΟ νέα</h2> <div class="popular-post-widget"> <div class="media" each="{newslist}"> <div class="media-left"> <a href="/news/{id}"> <i class="fa fa-rss-square wc-icon" style="font-size: 6em; color: #ee4532"></i> </a> </div> <div class="media-body"> <h4 class="media-heading"><a href="blog-single.html">{title}</a></h4> <p>{body}</p> </div> </div> </div> </div>', '', '', function(opts) {

    this.newslist = []
    this.api = '/api/news?size=3'

    var self = this

    this.on("mount", function() {
        $.getJSON(self.api).done(function(resp) {
            self.newslist = resp.data
            self.update()
          })
    })

});