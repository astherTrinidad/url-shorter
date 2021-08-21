<?php

namespace App\Repository;

use App\Entity\Url;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\EntityManagerInterface;

/**
 * @method Url|null findOneBy(array $criteria, array $orderBy = null)
 *  */
class UrlRepository extends ServiceEntityRepository {

    private $em;

    public function __construct(ManagerRegistry $registry, EntityManagerInterface $em) {
        parent::__construct($registry, Url::class);
        $this->em = $em;
    }

    public function save(Url $url) {

        try {
            $this->em->persist($url);
            $this->em->flush();
            
        } catch (\Exception $error) {
            throw $error;
        }
    }

}
