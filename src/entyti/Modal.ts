import { Modal } from "bootstrap";

export class ModalVue<T> {
    public Modal!: Modal;
    public options?: Partial<Modal.Options> | undefined;
    public props!: T ;
    constructor(props?: T, options?: Partial<Modal.Options> | undefined){
        this.options = options;
        if(props)
            this.props = props;
    }
    public setModal(element: Element): void{
        if(element)
            this.Modal = new Modal(element,this.options)
    }
    public SetProps(NewProps: T){
        this.props = NewProps;
    }
}