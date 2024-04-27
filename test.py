def foo(x, y=2, *args, **kwargs):
    return x + y + sum(args) + sum(kwargs.values())

print(foo(1,2,3,a=4,b=5))