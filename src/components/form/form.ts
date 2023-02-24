import Component from '../../services/Component';
import tpl from './tpl';

export default class Form extends Component {
    render(){
        console.log('form render');
        return this.compile(tpl);
    }
    addEvents() {
        this.element!.querySelectorAll('a').forEach(a => {
            //Конкретный инвент кидаем
            //a.addEventListener('click', this.props.events.click);
            //Обработчик здесь
            /*a.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Link clicked')
            })*/
            //Проверяем, пришли ли ивенты, если да - разбираем их и добавляем обработчик.
            if(this.props.events !=undefined) {
                Object.entries(this.props.events).forEach(([key, value]) => {
                    a.addEventListener(key, value as any);
                    console.log('Автомат ивент');

                });
            }
        });
        super.addEvents();
    }
}
