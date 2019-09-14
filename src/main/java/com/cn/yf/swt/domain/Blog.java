package com.cn.yf.swt.domain;

import lombok.Data;

import java.util.Date;

@Data
public class Blog {

    private String title;
    private String type;
    private String image;
    private String description;
    private Date activeDate;
    private String content;
    private Date updatedDate;
    private String isEnable;

}
