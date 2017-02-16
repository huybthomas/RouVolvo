package be.uantwerpen.rouvolvo.models;

import org.springframework.data.jpa.domain.AbstractPersistable;

import java.io.Serializable;

/**
 * Created by Thomas on 17/02/2017.
 */
public class MyAbstractPersistable<T extends Serializable> extends AbstractPersistable<T>
{
    //Patch to access the private setId method of AbstractPersistable
    @Override
    public void setId(T id)
    {
        super.setId(id);
    }
}
