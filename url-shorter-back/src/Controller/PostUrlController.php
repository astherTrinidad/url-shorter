<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Services\PostUrlManager;


class PostUrlController extends AbstractController {
    
    private $postUrlManager;
   
    public function __construct(PostUrlManager $postUrlManager) {
        $this->postUrlManager = $postUrlManager;
    }

        /**
     * @Route("/shorter", name="shorter", methods={"POST"})
     */
    public function shorter(Request $request): Response {
        
        $parameters = json_decode($request->getContent(), true);
        $result = $this->postUrlManager->invoke($parameters);
 
        return new JsonResponse($result);
    }
    
}
