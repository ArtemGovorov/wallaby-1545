function computed() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    }
}

function action() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    }
}

export default class A {

    @computed()
    public async a(p: any) {
        return await p;
    }

    public b(p: any) {
        return this.c(p);
    }

    @action()
    private c(p: any) {
        return p;
    }
}