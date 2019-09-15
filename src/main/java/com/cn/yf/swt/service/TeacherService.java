package com.cn.yf.swt.service;

import com.cn.yf.swt.domain.Teacher;
import com.cn.yf.swt.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.data.elasticsearch.core.query.SearchQuery;
import org.springframework.stereotype.Service;

@Service
public class TeacherService {

    @Autowired
    private TeacherRepository teacherRepository;

    public long count(){
        return teacherRepository.count();
    }

    public Iterable<Teacher> findAll(){
        return teacherRepository.findAll();
    }

    public Teacher save(Teacher teacher){
        return teacherRepository.save(teacher);
    }

    public void delete(Teacher teacher){
        teacherRepository.delete(teacher);
    }

    public Page<Teacher> pageQuery(Integer pageNo, Integer pageSize){
        SearchQuery searchQuery = new NativeSearchQueryBuilder()
                //.withQuery(QueryBuilders.matchPhraseQuery("",""))
                .withPageable(PageRequest.of(pageNo, pageSize))
                .build();
        return teacherRepository.search(searchQuery);
    }

}
