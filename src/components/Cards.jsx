import { faCss3, faGithub, faMarkdown, faReact } from '@fortawesome/free-brands-svg-icons'
import {faDatabase, faFile} from '@fortawesome/free-solid-svg-icons'
import Card from './Card'
import '../css/Cards.css'

const Cards = () => {
    const array = [
        {
            icon : faCss3,
            title : 'Customise Design using CSS',
            content : 'Modify the appearance of your blog using our Custom CSS feature. Change the font family, font size, primary link colors, and more.'
        },
        {
            icon : faMarkdown,
            title : 'Write in Markdown',
            content : 'Write your content in a distraction-free Markdown editor with proper syntax highlighting and see live previews instantly. Embed images, code snippets, tweets, and much more.'
        },
        {
            icon : faDatabase,
            title : 'Own your data',
            content : 'You retain all the rights to your content. Export and download all your posts from your dashboard with a single click.'
        },
        {
            icon : faReact,
            title : 'Superfast React.js Powered Blogs',
            content : "Hashnode blogs are powered by React.js, which helps your blogs to load superfast."
        },
        {
            icon : faFile,
            title : 'Drafts',
            content : 'Share your drafts with your friends to get some early feedback before you hit the publish button.'
        },
        {
            icon : faGithub,
            title : 'Automatic GitHub Backup',
            content : 'Every time you publish an article on your blog, a markdown version of the post is pushed to your private GitHub repo as a backup.'
        },
    ]
    return (
        <div className='lpage-cards'>
            <p id='lpage-cards-p'>Features that will make your blogging 10x better</p>
            <p id="lpage-cards-pp">Content Ownership.No Ads. No Paywall. No kidding.</p>
            <div id="lpage-cards-card">
                {
                    array.map((obj,index) =>{
                        return <Card key={index} obj={obj} />
                    })
                }
            </div>
        </div>
    )
}

export default Cards
