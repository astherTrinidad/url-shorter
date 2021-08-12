<?php

namespace App\Entity;

use App\Repository\UrlRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=UrlRepository::class)
 */

class Url {

     /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=500, nullable=false)
     */
    private $origin;

    public function __construct($origin, $shorter) {
        $this->origin = $origin;
        $this->shorter = $shorter;
    }

   
    /**
     * @ORM\Column(type="string", length=500, nullable=false)
     */
    private $shorter;

    public function getOrigin(): string {
        return $this->origin;
    }

    public function getShorterWithUrlBase(): string {
        return 'http://localhost:8000/' .$this->shorter;
    }
    
}
