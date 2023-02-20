import renderDOM from './utils/render';
import IndexLayout from './layout/Main';
import Nav from './components/Nav';
import Page from './pages/IndexPage';


const nav = new Nav(
    'ul',
    {
        items: [
            {url: '/', title: 'Main'},
            {url: '/form', title: 'Form'}
        ],
        events: {
            click : e => {
                console.log('Nav link clicked');
                e.preventDefault();
                e.stopPropagation();
                /*if(e.target && e.target.getAttribute('href'))
                {
                    console.log('Nav link clicked');
                    e.preventDefault();
                    e.stopPropagation();
                }
                else {
                    console.log('No link clicked')
                }*/
            }
        },
    }
);

const content = new Page(
    'div',
    {
        text: 'Some text...'
    }
);
const page = new IndexLayout(
    'div',
    {
        nav: nav,
        title: 'Title',
        content: content,
        attr: {
            class: 'page',
        }
    }
);

//window.page = page;
//window.content = content;
/*window.changePageContent = () => {

    let newConetn = new Page(
        'div',
        {
            text: 'Another some text...'
        }

    );
    page.setProps({content: newConetn});
}*/
renderDOM('.app', page);
