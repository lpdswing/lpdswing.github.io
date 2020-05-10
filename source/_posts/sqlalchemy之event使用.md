---
title: sqlalchemy之event使用
urlname: mifw46
date: 2020-04-24 10:50:10 +0800
tags: []
categories: []
---

---

title: sqlalchemy之event使用


date: 2020-04-24 16:10:15


tags:  Python


categories:  Python

---

- 参考文档
  > [https://docs.sqlalchemy.org/en/13/orm/events.html?highlight=events#mapper-events](https://docs.sqlalchemy.org/en/13/orm/events.html?highlight=events#mapper-events)

```python
from sqlalchemy.event import listents_for
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

engine = create_engine(SQLALCHEMY_DATABASE_URL, pool_pre_ping=True)
Session = sessionmaker(autocommit=False,autoflush=False,bind=engine)
session = Session()

# 示例为当删除某条数据的时候,触发event删除和这条数据相关的数据,适合用于没外键约束的关系表结构

@listens_for(User,'after_delete')
def after_del_user(mapper,connection,target):
    print(mapped)  # class User->user ,映射
    print(connection) # <sqlalchemy.engine.base.Connection object at xxxxx>
    print(target.id)  # target就是user对象
    # ....,写逻辑代码
```
