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

    @action()
    private b(p: any) {
        return p;
    }
}