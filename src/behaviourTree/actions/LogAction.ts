class LogAction<T> extends Behavior<T>{
    public text: string;
    public isError: boolean;

    constructor(text: string){
        super();

        this.text = text;
    }

    public update(context: T): TaskStatus{
        if (this.isError)
            console.error(this.text);
        else
            console.log(this.text);

        return TaskStatus.Success;
    }
}