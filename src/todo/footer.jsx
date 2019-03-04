import '../assets/styles/footer.styl'

export default {
    data() {
        return {
            author: 'runrunlolz',
            blog: 'https://github.com/runrunlolz'
        }
    },
    render() {
        return (
            <div id="footer">
                <span>Power by {this.author}，欢迎访问作者github：{this.blog}</span>
            </div>
        )
    }
}