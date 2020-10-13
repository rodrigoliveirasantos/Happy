import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm'
import Image from './Image'

@Entity('orphanages')
export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    name: string;
    
    @Column()
    latitude: number;
    
    @Column()
    longitude: number;
    
    @Column()
    about: string;
    
    @Column()
    instructions: string;
    
    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    // Tipo do dado que será armazenado || o relacionamento inverso na tabela Image || config
    // cascade: Quando o orfanato for alterado ele irá cadastrar (insert) ou atualizar (update) quem está relacionado com ele
    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'orphanage_id' })
    images: Image[];
}