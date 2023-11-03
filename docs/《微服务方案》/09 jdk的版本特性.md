# 资料 
- https://blog.csdn.net/qq_44150902/article/details/129062849
 
## 简述一下各个jdk版本特性
1. jdk8(2014-3LTS)
- lambda、函数式编程、Optional、新的日期API、ConcurrentHashMap、HashMap底层存储变更
- JVM 使用元空间（MetaSpace)代替永久代（PermGen Space)
- 重要特性：重要特性：Lambda表达式、函数式接口、方法引用、Stream流式API、采用元空间（MetaSpace）代替了方法区（PermGen Space）。

2. jdk9(2017-9)
- 设置G1为jvm 默认的垃圾回收器
- 支持http2.0 和websocket的ApI
- 重要特性：主要是API的优化，如支持HTTP2的Client API、JVM采用G1为默认垃圾收集器

3. jdk10(2018-3)
- 局部变量类型推导，var
- 并行Full GC，来优化G1的延迟；   
- 重要特性：通过var关键字实现局部变量类型推断，使Java语言变成弱类型语言、JVM的G1垃圾回收由单线程改成多线程并行处理，降低G1的停顿时间

4. jdk11(2018-9 LTS)
- ZGC，ZGC可以看做是G1之上更细粒度的内存管理策略。由于内存的不断分配回收会产生大量的内存碎片空间，因此需要整理策略防止内存空间碎片化，在整理期间需要将对于内存引用的线程逻辑暂停，这个过程被称为"Stop the world"。只有当整理完成后，线程逻辑才可以继续运行。（并行回收）；
- 对Stream、Optional、Collection API进行增强。
- 重要特性：对于JDK9和JDK10的完善，主要是对于Stream、集合等API的增强、新增ZGC垃圾收集器。

5. jdk12(2019-3)
- Shenandoah GC，新增的GC算法；
- switch （预览版）表达式语法扩展，可以有返回值；
- G1收集器的优化，将GC的垃圾分为强制部分和可选部分，强制部分会被回收，可选部分可能不会被回收，提高GC的效率。
- FileInputStream 和 FileOutputStream的finalize 方法移除
- 重要特性：switch表达式语法扩展、G1收集器优化、新增Shenandoah GC垃圾回收算法

6. jdk13(2019-9)
- Socket的底层实现优化，引入了NIO；
- ZGC优化，将标记长时间空闲的堆内存空间返还给操作系统，保证堆大小不会小于配置的最小堆内存大小，如果堆最大和最小内存大小设置一样，则不会释放内存还给操作系统，且支持的堆大小从4TB增至16TB；
- 引入了文本块，可以使用"""三个双引号表示文本块，文本块内部就不需要使用换行的转义字符
- 重要特性：ZGC优化，释放内存还给操作系统、socket底层实现引入NIO。

7. jdk14(2020-3)
- instanceof类型匹配语法简化，可以直接给对象赋值，如if(obj instanceof String str),如果obj是字符串类型则直接赋值给了str变量；
- 引入record类，类似于枚举类型，可以向Lombok一样自动生成构造器、equals、getter等方法；
- NullPointerException打印优化，打印具体哪个方法抛的空指针异常，避免同一行代码多个函数调用时无法判断具体是哪个函数抛异常的困扰，方便异常排查；

8. jdk15(2020-9)
1、隐藏类 hidden class；
2、密封类 sealed class，通过sealed关键字修饰抽象类限定只允许指定的子类才可以实现或继承抽象类，避免抽象类被滥用。
3、CharSequence类增强

9. jdk16(2021-3)
- ZGC性能优化；
- instanceof模式匹配；
- record的引入。

- JDK16相当于是将JDK14、JDK15的一些特性进行了正式引入

10. jdk17(2021-9 LTS)
- 正式引入密封类sealed class，限制抽象类的实现；
- 统一日志异步刷新，先将日志写入缓存，然后再异步刷新。
虽然JDK17也是一个LTS版本，但是并没有像JDK8和JDK11一样引入比较突出的特性，主要是对前几个版本的整合和完善。

11. JDK18新特性（2022-3）
- 向量api

12. JDK19新特性（2022-9）
- 记录模式（预览版）：支持用户嵌套记录模式和类型模式，以创建强大、声明性且可组合的数据导航和处理形式，从而扩展模式匹配，实现更复杂的数据查询。
- Switch 模式匹配（第三预览版）：根据某些模式来测试表达式，以进行 switch 表达式和语句的模式匹配，让用户可以安全、简洁地表达面向数据的复杂查询。
- 外部函数和内存 API（预览版）：Java 程序可以更容易地与 Java 运行时之外的代码和数据进行互操作。通过有效调用外部函数（即 JVM 之外的代码），以及安全地访问外部内存（即不受 Java Virtual Machine [JVM] 管理的内存），API 可以通过纯 Java 开发模型调用本地库和处理原生数据，从而提高易用性、性能、灵活性和安全性。
- 矢量 API（四次孵化阶段）：允许以一种在运行时，可靠地编译为支持的 CPU 架构上的向量指令方式表达向量计算，从而实现优于等效标量计算的性能。
- Linux/RISC-V 端口：通过将此端口集成到 JDK 主线存储库中中，以便于进行 Linux/RISC-V 实施。
- 虚拟线程（预览版）：通过向 Java 平台引入轻量级虚拟线程，显著减少编写、维护和观察高吞吐量并发应用的工作量。开发人员可以通过虚拟线程轻松使用现有的 JDK 工具和技术对并发应用进行故障排除、调试和分析。
- 结构化并发（孵化器）：通过简化多线程编程和将运行于不同线程中的多个任务视为一个工作单元，简化错误处理和取消工作并提高可靠性和可观测性。
- 重要特性：虚拟线程

13. JDK20新特性（2023-3）

- G1垃圾收集器 优化


总结：
- 7、8、11、17 LTS 版本
- 8 lambda 、optional、currentHashMap、map 底层优化
- 9 G1 gc 默认垃圾回收,api 优化（completeFeture)
- 10 var
- 11 zgc 
- 12 Shenandoah gc、switch 语法糖
- 13 ZGC优化，释放内存还给操作系统、socket底层实现引入NIO。
- 14 引入record类，类似于枚举类型，lombok
- 15 隐藏类 hidden class；
- 16 ZGC性能优化
- 17 整合，异步刷盘
- 18 向量api
- 19 虚线程、向量api
- 20 优化打印，G1垃圾回收