---
level: "undergrad"
course: "面向对象程序设计（OOP）"
title: "第七次随堂练习"
deadline: "2026-11-04 23:59:59"
submit_link: "https://pan.hunnu.edu.cn/u/d/9afc3c1cb193425f9d34/"
---

## Exercise Requirements

#### 提交格式：

```
学号_姓名_第7次随堂练习/
  |- C++代码
    |- Human.h
    |- Human.cpp
    |- ...
  |- Java代码
    |- Human.java
    |- Student.java
    |- ...

例：2025xxxx_张三_第7次随堂练习/
  |- C++代码
    |- Human.h
    |- Human.cpp
    |- ...
  |- Java代码
    |- Human.java
    |- Student.java
    |- ...
```

### 随堂练习一：用C++代码实现下面的描述

#### 一、基础任务

##### 详细要求

1. 定义 Human 类：protected int id；构造函数输出 Human(int)；析构函数输出 ~Human()；say() 输出基类 id。
2. 定义 Student : public Human：private int id 和 int sid；构造函数调用 Human(humanId)，并初始化本类 id 与 sid；析构函数输出 ~Student()。
3. 在 Student 中定义 show()，同时输出 this->id、Human::id 和 sid。
4. 在 main 中创建一个局部 Student 对象，调用 show() 和 Human::say()，观察程序输出。

##### 参考代码

**Human.h**

```c++
#ifndef HUMAN_H_INCLUDE
#define HUMAN_H_INCLUDE

class Human{
protected:
    int id;
public:
    Human(int id);
    ~Human();
    void say();
};

#endif
```

**Human.cpp**

```c++
#include <iostream>
#include "Human.h"

Human::Human(int id) : id(id) {
    std::cout << "构造：Human(int)" << std::endl;
}

Human::~Human() {
    std::cout << "析构：~Human()" << std::endl;
}

void Human::say() {
    std::cout << "我是个Human，我的id是：" << id << std::endl;
}
```

**Student.h**

```c++
#ifndef STUDENT_H_INCLUDE
#define STUDENT_H_INCLUDE

class Student : public Human{
private:
    int id;
    int sid;
public:
    Student(int humanId, int id, int sid);
    ~Student();
    void show();
};

#endif
```

**Student.cpp**

```c++
#include <iostream>
#include "Human.h"
#include "Student.h"

Student::Student(int humanId, int id, int sid) : Human(humanId), id(id), sid(sid) {
    std::cout << "构造：Student(int, int, int)" << std::endl;
}
Student::~Student() {
    std::cout << "析构：~Student()" << std::endl;
}
void Student::show() {
    std::cout << "Student's id: " << this->id << std::endl;
    std::cout << "Human's id: " << Human::id << std::endl;
    std::cout << "sid: " << sid << std::endl;
}
```

**test.cpp**

```c++
#include "Human.h"
#include "Student.h"

int main() {
    // Human human = Human(1001);
    // human.say();

    Student stu = Student(1002, 2001, 20260501);
    stu.show();
}
```

#### 二、扩展任务

##### 详细要求

1. 把 Human 的 id 改为 private，观察 Student 中访问 Human::id 会出现什么问题。
    * 然后给 Human 增加 getId 方法，通过公开接口读取。
2. 在 main 中增加一对花括号，把 Student 对象放进局部作用域，观察析构发生在什么时候。
    * 这个现象说明 C++ 局部对象的生命周期与作用域直接相关。

##### 参考代码


**Human.h**

```c++
#ifndef HUMAN_H_INCLUDE
#define HUMAN_H_INCLUDE

class Human{
private:
    int id;
public:
    Human(int id);
    ~Human();
    int getId();
    void say();
};

#endif
```

**Human.cpp**

```c++
#include <iostream>
#include "Human.h"

Human::Human(int id) : id(id) {
    std::cout << "构造：Human(int)" << std::endl;
}

Human::~Human() {
    std::cout << "析构：~Human()" << std::endl;
}

int Human::getId() {
    return id;
}

void Human::say() {
    std::cout << "我是个Human，我的id是：" << id << std::endl;
}
```



**Student.h**

```c++
#ifndef STUDENT_H_INCLUDE
#define STUDENT_H_INCLUDE

class Student : public Human{
private:
    int id;
    int sid;
public:
    Student(int humanId, int id, int sid);
    ~Student();
    void show();
};

#endif
```

**Student.cpp**

```c++
#include <iostream>
#include "Human.h"
#include "Student.h"

Student::Student(int humanId, int id, int sid) : Human(humanId), id(id), sid(sid) {
    std::cout << "构造：Student(int, int, int)" << std::endl;
}
Student::~Student() {
    std::cout << "析构：~Student()" << std::endl;
}
void Student::show() {
    std::cout << "Student's id: " << this->id << std::endl;
    // std::cout << "Human's id: " << Human::id << std::endl;
    std::cout << "Human's id: " << Human::getId() << std::endl;
    std::cout << "sid: " << sid << std::endl;
}
```

**test.cpp**

```c++
#include "Human.h"
#include "Student.h"

int main() {
    // Human human = Human(1001);
    // human.say();

    {
        Student stu1 = Student(2003, 3002, 20260802);
        stu1.show();
    }

    Student stu2 = Student(1002, 2001, 20260501);
    stu2.show();

}
```

### 随堂练习二：用Java代码实现下面的描述

#### 一、基础任务

##### 详细要求

1. 定义 Human类：protected int id；构造函数 Human(int id)；say() 输出 id。
2. 定义 Student extends Human：private int id 和 int sid；构造函数第一句调用 super(humanId)。
3. 定义 show()：输出 this.id、super.id、sid，并调用 super.say()。
4. 定义测试类 InheritDemo，在 main 中创建 Student 并调用 show()。
5. 基础任务完成后，再尝试把 Human.id 改为 private，修正编译错误。

##### 参考代码

**Human.java**

```java
public class Human{
    protected int id;
    
    public Human(int id) {
        this.id = id;
        System.out.println("构造：Human(int)");
    }
    public void say() {
        System.out.println("我是个Human，我的id是：" + id);
    }
}
```

**Student.java**

```java
public class Student extends Human {
    private int id;
    private int sid;

    public Student(int humanId, int id, int sid) {
        super(humanId);
        this.id = id;
        this.sid = sid;
        System.out.println("构造：Student(int, int, int)");
    }

    public void show() {
        System.out.println("Student's id: " + this.id);
        System.out.println("Human's id: " + super.id);
        System.out.println("sid: " + sid);
    }
}
```


**InheritDemo.java**

```java
public class InheritDemo {
    public static void main(String[] args) {
        Student stu = new Student(1002, 2001, 20260501);
        stu.show();
    }
}
```

#### 二、扩展任务

##### 详细要求

1. 把 Human 的 id 从 protected 改成 private。Student 中的 super.id 会立即报错。
    1. 这说明 private 成员虽然仍然存在于 Student 对象的父类部分中，但子类没有直接访问资格。
    2. 正确修正方法是在 Human 中提供 protected 或 public 的 getId 方法。这里推荐 public int getId()。Student 通过 super.getId() 读取父类状态。
2. 接下来有余力的同学把 Human 和 Student 分别放到两个包中。
    1. 观察默认访问和 protected 在跨包条件下的差异。
    2. 这个扩展不要求所有同学完成，重点是理解：Java 的访问控制不仅与继承有关，也与包边界有关。

##### 参考代码

**Human.java**

```java
public class Human{
    private int id;
    
    public Human(int id) {
        this.id = id;
        System.out.println("构造：Human(int)");
    }
    public int getId() {
        return id;
    }
    public void say() {
        System.out.println("我是个Human，我的id是：" + id);
    }
}
```

**Student.java**

```java
public class Student extends Human {
    private int id;
    private int sid;

    public Student(int humanId, int id, int sid) {
        super(humanId);
        this.id = id;
        this.sid = sid;
        System.out.println("构造：Student(int, int, int)");
    }

    public void show() {
        System.out.println("Student's id: " + this.id);
        // System.out.println("Human's id: " + super.id);
        System.out.println("Human's id: " + super.getId());
        System.out.println("sid: " + sid);
    }
}
```


**InheritDemo.java**

```java
public class InheritDemo {
    public static void main(String[] args) {
        Student stu = new Student(1002, 2001, 20260501);
        stu.show();
    }
}
```
