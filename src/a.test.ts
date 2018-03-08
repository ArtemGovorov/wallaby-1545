import A from './a'

it('should work', async () => {
    const result = await new A().a(1);
    expect(result).toBe(1);
});

it('should work too', () => {
    const result = new A().b(2);
    expect(result).toBe(2);
});