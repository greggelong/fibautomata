a=[1, 1, 2, 3, 5, 8, 4, 3, 7, 1, 8, 9, 8, 8, 7, 6, 4, 1, 5, 6, 2, 8, 1, 9]
b= [1, 1, 2, 3, 5, 8, 4, 3, 7, 1, 8, 9, 8, 8, 7, 6, 4, 1, 5, 6, 2, 8, 1, 9]
c=[]
## fib 60 last digit
##a1 =[0, 1, 1, 2, 3, 5, 8, 3, 1, 4, 5, 9, 4, 3, 7, 0, 7, 7, 4, 1, 5, 6, 1, 7, 8, 5, 3, 8, 1, 9, 0, 9, 9, 8, 7, 5, 2, 7, 9, 6, 5, 1, 6, 7, 3, 0, 3, 3, 6, 9, 5, 4, 9, 3, 2, 5, 7, 2, 9, 1]
##print(len(a1))
# note we must make a reduce function because mod 9 will return 0 instad of 9


def fibnext():
    global a,b,c
    for n in range(0,len(a)):
        new = (a[n]+b[n])
        c.append(reduce(new))
    a =[i for i in b]
    b=[i for i in c]
    c=[]


def reduce(n):
    if n <=9:
        return n
    
    else:
        nlist = [int(x) for x in str(n)]
        count =0
        rlist = []
        while len(nlist)>1:
            count +=1
            sumit = sum(nlist)
            rlist.append(sumit)
            nlist=[int(x) for x in str(sumit)]
            return sum(nlist)
 

print(a)
print(a)

for x in range(22):
    
    fibnext()
    print(b)
